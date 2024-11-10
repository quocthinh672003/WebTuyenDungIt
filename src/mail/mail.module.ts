import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Job, JobSchema } from 'src/jobs/schemas/job.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscriber, SubscriberSchema } from 'src/subscribers/schemas/subscriber.schemas';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Job.name, schema: JobSchema },
      { name: Subscriber.name, schema: SubscriberSchema }

    ]),
    MailerModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>("MAIL_HOST"),
          secure: false,
          auth: {
            user: configService.get<string>("SENDER_MAIL"),
            pass: configService.get<string>("PASSWORD_MAIL"),
          },
        },

        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
          preview: configService.get<string>("EMAIL_PREVIEW") === 'true' ? true : false,
        },
      }),
      inject: [ConfigService],
    }),
  ],

  controllers: [MailController],
  providers: [MailService]
})
export class MailModule {}

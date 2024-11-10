import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';
import { Public, ResponseMessage } from 'src/decorators/customize';
import { MailerService } from '@nestjs-modules/mailer';
import { Job, JobDocument } from 'src/jobs/schemas/job.schema';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Subscriber, SubscriberDocument } from 'src/subscribers/schemas/subscriber.schemas';
import { compare } from 'bcryptjs';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService,
    private mailerService: MailerService,
    @InjectModel(Job.name) private JobModel: SoftDeleteModel<JobDocument>,
    @InjectModel(Subscriber.name) private SubscriberModel: SoftDeleteModel<SubscriberDocument>

) {}

  
  @Get()
  @Public()
  @ResponseMessage("Test email")
  @Cron('* * 20 * * 6')
  async handleTestEmail() {
     

    const subscribers = await this.SubscriberModel.find({});
    for( const subscriber of subscribers) {
      const subscriberSkills = subscriber.skills;
      const jobWithMatchingSkills = await this.JobModel.find({ skills: {$in: subscriberSkills}});
      if(jobWithMatchingSkills.length > 0) {
        const jobs = jobWithMatchingSkills.map(item => {
          return {
            name: item.name,
            company: item.company,
            salary:`${item.salary}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " đ",
            skills: item.skills
          }
        })
        await this.mailerService.sendMail({
          to: subscriber.email,
          from: '"Support Team" <support@example.com>', // override default from
          subject: 'Welcome to Nice App! Confirm your Email',
          template: 'job', 
          context: {
            receiver: subscriber.name , 
            jobs: jobs
          }
        });
      }
      
      
    }
    
  }

}

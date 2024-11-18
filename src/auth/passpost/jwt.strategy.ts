import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IUser } from 'src/users/users.interface';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private rolesService: RolesService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>("JWT_ACCESS_TOKEN_SECRET"),
        });
    }

    async validate(payload: IUser) {
        // console.log('Payload:', payload);
        if (!payload || !payload._id) {
            throw new UnauthorizedException('Invalid token payload');
        }

        const { _id, name, email, role } = payload;
        // cần gán thêm permissions vào req.user
        const userRole = role as unknown as { _id: string; name: string }
        
        if (!role || !role._id) {
            throw new UnauthorizedException('Role information is missing');
        }

        const roleData = await this.rolesService.findOne(userRole._id);
        if (!roleData) {
        throw new UnauthorizedException('Role not found');
        }

        const temp = roleData.toObject();


        //req.user
        return {
            _id,
            name,
            email,
            role,
            permissions: temp?.permissions ?? []
        };
    }

}
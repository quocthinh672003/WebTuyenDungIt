import { Controller, Post, UseGuards, Get, Body, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Public, ResponseMessage, User } from 'src/decorators/customize';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { Request, response, Response } from 'express';
import { IUser } from 'src/users/users.interface';
import { RolesService } from 'src/roles/roles.service';

@Controller("auth")
export class AuthController {
    constructor(
        private authService: AuthService,
        private roleService: RolesService

    ) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @ResponseMessage("user login")
    @Post('/login')
    handleLogin(
        @Req() req,
        @Res({ passthrough: true }) response: Response) {
        return this.authService.login(req.user,response);
    }

    // @UseGuards(JwtAuthGuard)
    @Public()
    @ResponseMessage("register a new user")
    @Post('/register')
    handleRegister(@Body() registerUserDto: RegisterUserDto) {
        return this.authService.register(registerUserDto);
    }

    @ResponseMessage("logout user")
    @Post('/logout')
    handleLogout(
        @Res( { passthrough: true}) response: Response,
        @User() user: IUser
    ) {
        return this.authService.logout(response, user);
    }

    // @UseGuards(JwtAuthGuard)
    @ResponseMessage('get user information')
    @Get('/account')
    async handleGetAccount(@User() user: IUser) {
        const temp = await this.roleService.findOne(user.role._id) as any;
        user.permissions = temp.permissions;
        return { user };
    }

    @Public()
    // @UseGuards(JwtAuthGuard)
    @ResponseMessage('get user by refresh token')
    @Get('/refresh')
    handleRefreshToken(
        @Req() request: Request,
        @Res({ passthrough: true }) response: Response
    ) {
        const refreshToken = request.cookies['refreshToken'];
        // console.log('Refresh Token Received:', refreshToken); // Log token nhận được
        return this.authService.processNewToken(refreshToken,response);
    }
}

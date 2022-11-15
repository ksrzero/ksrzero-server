import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MobilesModule } from './mobiles/mobiles.module';
import { UsersModule } from './users/users.module';
import { BrandsModule } from './brands/brands.module';
import { AdsModule } from './ads/ads.module';
import { NotificationsController } from './notifications/notifications.controller';

@Module({
  imports: [MobilesModule, UsersModule, BrandsModule, AdsModule],
  controllers: [AppController, NotificationsController],
  providers: [AppService],
})
export class AppModule {}

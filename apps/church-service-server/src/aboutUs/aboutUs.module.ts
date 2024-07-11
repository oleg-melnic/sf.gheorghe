import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AboutUsModuleBase } from "./base/aboutUs.module.base";
import { AboutUsService } from "./aboutUs.service";
import { AboutUsController } from "./aboutUs.controller";
import { AboutUsResolver } from "./aboutUs.resolver";

@Module({
  imports: [AboutUsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AboutUsController],
  providers: [AboutUsService, AboutUsResolver],
  exports: [AboutUsService],
})
export class AboutUsModule {}

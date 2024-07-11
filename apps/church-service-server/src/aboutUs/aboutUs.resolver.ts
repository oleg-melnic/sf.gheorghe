import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AboutUsResolverBase } from "./base/aboutUs.resolver.base";
import { AboutUs } from "./base/AboutUs";
import { AboutUsService } from "./aboutUs.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AboutUs)
export class AboutUsResolver extends AboutUsResolverBase {
  constructor(
    protected readonly service: AboutUsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

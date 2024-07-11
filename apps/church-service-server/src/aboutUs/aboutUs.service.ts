import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AboutUsServiceBase } from "./base/aboutUs.service.base";

@Injectable()
export class AboutUsService extends AboutUsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

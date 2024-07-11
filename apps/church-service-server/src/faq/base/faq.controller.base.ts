/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FaqService } from "../faq.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FaqCreateInput } from "./FaqCreateInput";
import { Faq } from "./Faq";
import { FaqFindManyArgs } from "./FaqFindManyArgs";
import { FaqWhereUniqueInput } from "./FaqWhereUniqueInput";
import { FaqUpdateInput } from "./FaqUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FaqControllerBase {
  constructor(
    protected readonly service: FaqService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Faq })
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFaq(@common.Body() data: FaqCreateInput): Promise<Faq> {
    return await this.service.createFaq({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        question: true,
        answer: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Faq] })
  @ApiNestedQuery(FaqFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async faqs(@common.Req() request: Request): Promise<Faq[]> {
    const args = plainToClass(FaqFindManyArgs, request.query);
    return this.service.faqs({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        question: true,
        answer: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Faq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async faq(@common.Param() params: FaqWhereUniqueInput): Promise<Faq | null> {
    const result = await this.service.faq({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        question: true,
        answer: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Faq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFaq(
    @common.Param() params: FaqWhereUniqueInput,
    @common.Body() data: FaqUpdateInput
  ): Promise<Faq | null> {
    try {
      return await this.service.updateFaq({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          question: true,
          answer: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Faq })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFaq(
    @common.Param() params: FaqWhereUniqueInput
  ): Promise<Faq | null> {
    try {
      return await this.service.deleteFaq({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          question: true,
          answer: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutCollaborationsInput } from "../inputs/UserUpdateManyWithoutCollaborationsInput";
import { UserUpdateManyWithoutFollowedProjectsInput } from "../inputs/UserUpdateManyWithoutFollowedProjectsInput";
import { UserUpdateManyWithoutLikedProjectsInput } from "../inputs/UserUpdateManyWithoutLikedProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateWithoutOwnerInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  logoUrl?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bannerUrl?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  githubUrl?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedProjectsInput, {
    nullable: true
  })
  likers?: UserUpdateManyWithoutLikedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowedProjectsInput, {
    nullable: true
  })
  followers?: UserUpdateManyWithoutFollowedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutCollaborationsInput, {
    nullable: true
  })
  collaborators?: UserUpdateManyWithoutCollaborationsInput | undefined;
}
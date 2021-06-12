import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Project } from "../models/Project";
import { UserProfile } from "../models/UserProfile";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  joinDate!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  marketingCredits!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  elonicMemberId!: string;

  projects?: Project[];

  likedProjects?: Project[];

  followedProjects?: Project[];

  collaborations?: Project[];

  profile?: UserProfile | null;

  followedBy?: User[];

  following?: User[];
}
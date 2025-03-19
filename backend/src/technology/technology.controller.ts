import { Controller, Get } from "@nestjs/common";
import { TechnologyPrisma } from "./technology.prisma";
import { Technology } from "@core";

@Controller("technologies")
export class TechnologyController {
  constructor(private readonly repository: TechnologyPrisma) {}

  @Get()
  async getAll(): Promise<Technology[]> {
    return this.repository.getAll();
  }

  @Get("featured")
  async getFeatured(): Promise<Technology[]> {
    return this.repository.getFeatured();
  }
}

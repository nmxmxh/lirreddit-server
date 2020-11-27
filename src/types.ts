import { Connection } from "@mikro-orm/core/connections/Connection";
import { IDatabaseDriver } from "@mikro-orm/core/drivers/IDatabaseDriver";
import { EntityManager } from "@mikro-orm/core/EntityManager";
import { Request, Response } from "express";
import { Redis } from "ioredis";

export type MyContext = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
    req: Request & {session: Express.Session };
    res: Response;
    redis: Redis;
}

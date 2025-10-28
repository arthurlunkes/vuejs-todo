import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './modules/users/user.module';
import { TaskModule } from './modules/tasks/task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // Auto carregar entidades
      autoLoadEntities: true,
      // Sincronizar com o banco, todas alterações são refletidas no banco
      // NÃO USAR EM PRODUÇÃO
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: [
        join(process.cwd(), 'src/modules/**/*.graphql'),
        join(process.cwd(), 'dist/modules/**/*.graphql'),
      ],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'), // gera types TS a partir do schema
        outputAs: 'class',
      },
    }),
    UserModule,
    TaskModule,
  ],
})
export class AppModule {}

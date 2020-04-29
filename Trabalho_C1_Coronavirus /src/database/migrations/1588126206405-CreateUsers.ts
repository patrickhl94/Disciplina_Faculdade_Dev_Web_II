import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1588126206405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cellphone',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'birth',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'weight',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'height',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'health_problems',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'street',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address_number',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'zip_code',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'group_of_risk',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

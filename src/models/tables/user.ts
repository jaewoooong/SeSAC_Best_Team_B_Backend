import { Model, Column, Table, DataType } from "sequelize-typescript";

@Table({ timestamps: true })
class User extends Model {

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  kakaoId!: string;

  // Refresh Token 칼럼을 추가합니다. 
  // 문자열 형태의 토큰 값이 저장됩니다.
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  refreshToken?: string;

}

export default User;

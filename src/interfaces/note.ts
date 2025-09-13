export interface INote {
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  is_deleted?: boolean;
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt?: number;
    updateAt?: number;
  };
};

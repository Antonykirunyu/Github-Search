export class Users {
    constructor(
      public username: string,
      public profilePic: string,
      public followers: number,
      public following: number,
      public repos: number
    ) {}
  }
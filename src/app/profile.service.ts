import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  
  private username: string;
  private client_id = "c19ee2cc306afc58cb28";
  private client_secret = "749c89a0efd982a23e0c91e2f7b1fffd75d52034";

  constructor(private http: HttpClient) {
    console.log("The service is ready");
    this.username = "Antonykirunyu";
  }

  getProfileInfo() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }

  getProfileRepos() {
    return this.http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
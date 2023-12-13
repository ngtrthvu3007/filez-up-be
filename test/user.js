import dotenv from "dotenv";
import chai, { should, expect } from "chai";
import chaiHttp from "chai-http";
import { app } from "../src/index.js";
dotenv.config();
process.env.NODE_ENV = "test";
chai.use(chaiHttp);

describe("Users", () => {
  beforeEach((done) => {
    done();
  });

  describe("/POST login user", () => {
    it("it should return 2 token", (done) => {
      let user = {
        email: "nguyentranthevu@gmail.com",
        password: "123456",
      };
      chai
        .request(app)
        .post("/user/login")
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.a("object");
          expect(res.body.result).to.have.property("access_token");
          expect(res.body.result).to.have.property("refresh_token");
          done();
        });
    });
  });
});

describe("Users", () => {
  beforeEach((done) => {
    done();
  });

  describe("/POST register user", () => {
    it("it should return an user object", (done) => {
      let user = {
        name: "Vincent",
        email: "nguyenthevu@gmail.com",
        password: "123456",
        confirm_password: "123456",
      };
      chai
        .request(app)
        .post("/user/register")
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.result.new_user).to.be.a("object");
          expect(res.body.result.new_user).to.have.property("name");
          expect(res.body.result.new_user).to.have.property("email");
          expect(res.body.result.new_user).to.have.property("password");
          done();
        });
    });
  });
});

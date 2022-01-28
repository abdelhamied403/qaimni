import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: "468982278086646",
      clientSecret: "dccbc0d871a6893144403bb5b2e62978",
    }),
    GoogleProvider({
      clientId:
        "466670452015-d65kpu28ct02ck8nfju57bji0858720k.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: "alK8bAWP+npfCrkF5ZeIEguTLnB06PAk+p/mtRfzuzs=",
});

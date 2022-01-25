// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const DEPLOY_URL = process.env.DEPLOY_URL;
  const DEPLOY_PRIME_URL = process.env.DEPLOY_PRIME_URL;
  res.status(200).json({
    DEPLOY_URL,
    DEPLOY_PRIME_URL,
  });
}

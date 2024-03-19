export default async (req, context) => {
    return Response.json({
            message: "Hello World!"
        });
};

export const config = {
    path: "/.netlify/functions/hello-world"
  }
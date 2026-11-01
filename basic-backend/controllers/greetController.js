const greetController = (req, res) => {
  const { searchParams } = new URL(req.url, 'http://localhost');
  const name = searchParams.get('name') || 'Guest';

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name}!`);
};

module.exports = greetController;

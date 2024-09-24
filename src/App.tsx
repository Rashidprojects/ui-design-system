import { Typography, Button, Card } from './components';
import './index.css'

function App() {
  return (
    <div className="p-6">
      <Typography variant="h1" className="mb-4">
        Welcome to My React App
      </Typography>
      
      <Card className="mb-4 bg-red-500">
        <span className='bg-red-500'>
          <Typography variant="p" className='text-black'>This is a reusable card component.</Typography>
        </span>
      </Card>
      
      <Button variant="primary" className="mr-4">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>

      
      <h5 className='text-red-500'>
        Hello world
      </h5>
    </div>
  );
}

export default App;

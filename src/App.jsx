import { Button, Card } from './components';

function App() {
  return (
    <div style={{ maxWidth: 500 }}>
      <h1>Component Library</h1>

      <h2>Buttons</h2>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>

      <h2>Cards</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Card title="Default Card" variant="default">
          Simple card with subtle border and shadow.
        </Card>
        <Card title="Elevated Card" variant="elevated">
          Card with stronger shadow for emphasis.
        </Card>
        <Card title="Filled Card" variant="filled" padding="lg">
          Soft background, no border. Custom padding.
        </Card>
      </div>
    </div>
  );
}

export default App;

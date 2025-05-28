import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";

export default function Home() {
  return (
    <div>
      <h1>Property Valuator</h1>
      <p>AI nástroj na odhad trhovej hodnoty nehnuteľností na Slovensku.</p>
      <Card>
        <Label>Zadajte lokalitu</Label>
        <Input placeholder="Napr. Bratislava" />
      </Card>
    </div>
  );
}
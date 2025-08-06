import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const products = [
  {
    name: 'Eco-friendly Water Bottle',
    description: 'Stay hydrated and sustainable with our eco-friendly water bottle.',
    price: '$25.00',
    image: 'https://placehold.co/300x300.png',
    aiHint: 'water bottle'
  },
  {
    name: 'Wireless Charging Pad',
    description: 'Charge your devices with ease using our sleek wireless charging pad.',
    price: '$45.00',
    image: 'https://placehold.co/300x300.png',
    aiHint: 'charging pad'
  },
  {
    name: 'Noise-Cancelling Headphones',
    description: 'Immerse yourself in sound with our premium noise-cancelling headphones.',
    price: '$199.00',
    image: 'https://placehold.co/300x300.png',
    aiHint: 'headphones'
  },
   {
    name: 'Smart Coffee Mug',
    description: 'Keep your coffee at the perfect temperature with this smart mug.',
    price: '$99.00',
    image: 'https://placehold.co/300x300.png',
    aiHint: 'coffee mug'
  },
  {
    name: 'Portable Bluetooth Speaker',
    description: 'Take your music anywhere with this powerful and portable speaker.',
    price: '$79.00',
    image: 'https://placehold.co/300x300.png',
    aiHint: 'bluetooth speaker'
  },
  {
    name: 'Ergonomic Mouse',
    description: 'Work comfortably for hours with our ergonomically designed mouse.',
    price: '$65.00',
    image: 'https://placehold.co/300x300.png',
    aiHint: 'computer mouse'
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
        <Button>Add Product</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Card key={index}>
            <CardHeader className="p-0">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    data-ai-hint={product.aiHint}
                    className="w-full h-auto aspect-square object-cover rounded-t-lg"
                />
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <p className="font-semibold text-lg">{product.price}</p>
              <Button variant="outline">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

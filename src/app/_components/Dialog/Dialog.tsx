import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { FormatCurrency } from "@/lib/Formatting";
import { Checkbox } from "@/components/ui/checkbox";

export function AddToCartBtn({
  product,
}: {
  product: {
    itemImageUrl: string;
    itemHead: string;
    itemPrice: number;
    id: number;
  };
}) {
  const { itemImageUrl, itemHead, itemPrice } = product;
  const sizes = [
    { id: crypto.randomUUID(), size: "Small", price: 0 },
    { id: crypto.randomUUID(), size: "Meduim", price: 4 },
    { id: crypto.randomUUID(), size: "Large", price: 8 },
  ];
  const extras = [
    { item: "Extra Cheese", id: crypto.randomUUID() },
    { item: "Mushrooms", id: crypto.randomUUID() },
    { item: "Pepperoni", id: crypto.randomUUID() },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-6 py-2 rounded-md shadow-md hover:bg-transparent hover:text-black transition-all">
          Add To Cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-y-scroll max-h-[70vh]">
        <DialogDescription>
          <Image
            src={itemImageUrl}
            alt="..."
            width={150}
            height={150}
            className="m-auto"
          />
        </DialogDescription>
        <DialogHeader>
          <DialogTitle className="capitalize text-center">
            {itemHead}
          </DialogTitle>
          <DialogDescription className="text-center">
            Select your preferred size and click
          </DialogDescription>
        </DialogHeader>
        {/*Pick Your Size */}
        <SelectSize sizes={sizes} originPrice={itemPrice} />
        {/*Extra */}
        <SelectExtras extras={extras} />
        <DialogFooter>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const SelectSize = ({
  sizes,
  originPrice,
}: {
  sizes: any;
  originPrice: number;
}) => {
  return (
    <>
      <h3 className="font-bold text-center capitalize">pick your size</h3>
      <RadioGroup defaultValue="comfortable">
        {sizes.map((ele: { size: string; price: number; id: number }) => {
          return (
            <div
              className="flex items-center space-x-2 my-1 border p-4 cursor-pointer hover:shadow-black hover:shadow-sm transition duration-500"
              key={ele.id}
            >
              <RadioGroupItem value={ele.size} id={`${ele.id}`} />
              <Label htmlFor={`${ele.id}`} className="flex">
                <p className="me-1"> {ele.size} :</p>
                {
                  <FormatCurrency
                    value={originPrice + ele.price}
                    currency="USD"
                    locale="en-US"
                  />
                }
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </>
  );
};

const SelectExtras = ({ extras }: { extras: any }) => {
  return (
    <>
      <h3 className="font-bold text-center capitalize">Extra!</h3>
      {extras.map((el: { item: string; id: number }) => (
        <div
          className="flex items-center space-x-2 border p-3 cursor-pointer hover:shadow-black hover:shadow-sm transition duration-500"
          key={el.id}
        >
          <Checkbox id={`${el.id}`} />
          <label
            htmlFor={`${el.id}`}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {el.item}
          </label>
        </div>
      ))}
    </>
  );
};

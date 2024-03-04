import Link from "next/link";
import { Settings } from "lucide-react";
import { AddProperty } from "./add-property/add-property";
import { Button } from "~/components/ui/button";

import { IdCardIcon } from "@radix-ui/react-icons";
import {
  type Locations,
  type BrokerEntity,
  type Category,
} from "@prisma/client";

export default function AddPropertyToolbar({
  categories,
  locations,
  brokers,
}: {
  categories: Category[];
  locations: Locations[];
  brokers: BrokerEntity[];
}) {
  return (
    <div className="fixed bottom-0 z-10 flex  w-full flex-wrap items-center justify-between gap-4 border-t-2 bg-white p-4 dark:bg-[#020817] md:static md:bottom-auto md:w-auto md:border-0">
      <AddProperty
        categories={categories}
        locations={locations}
        brokers={brokers}
      />
      <div className="flex items-center gap-2">
        <Button variant="secondary" className="items-center gap-2" asChild>
          <Link href="/dashboard/brokers" className="text-sm">
            Brokers <IdCardIcon className="size-5" />
          </Link>
        </Button>
        {/* <Button variant="secondary" asChild className="items-center gap-2">
              <Link href="/dashboard/archived" className="text-sm">
              Archive <ArchiveIcon className="size-4" />
              </Link>
            </Button> */}
        <Button variant="secondary" asChild>
          <Link href="/dashboard/settings">
            <Settings className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
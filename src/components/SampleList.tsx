// components/SampleList.tsx
import React from "react";
import Link from "next/link";
import { SampleImage } from "@/constants/sampleImages";

interface SampleListProps {
  samples: SampleImage[];
}

const SampleList: React.FC<SampleListProps> = ({ samples }) => {
  return (
    <div className="p-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((sample, index) => (
          <li
            key={index}
            className="border p-4 rounded-lg shadow hover:bg-gray-100"
          >
            <Link
              href={`/image/${index + 1}`}
              className="text-grey-500 hover:underline"
            >
              {`Image ${index + 1}: ${sample.alt}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SampleList;

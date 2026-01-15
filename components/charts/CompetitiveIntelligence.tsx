'use client'

interface ManufacturerData {
  manufacturer: string
  brands: string[]
  soldUnits: string
}

// Golf Cart Manufacturers Data
const manufacturerData: ManufacturerData[] = [
  {
    manufacturer: 'Club Car, LLC',
    brands: ['Club Car Carryall Series', 'Club Car Villager Series', 'Club Car Onward'],
    soldUnits: 'XX'
  },
  {
    manufacturer: 'Yamaha Motor Co., Ltd.',
    brands: ['Yamaha Drive2 Electric', 'Yamaha Drive2 Gas'],
    soldUnits: 'XX'
  },
  {
    manufacturer: 'Marshell Green Power',
    brands: ['Marshell DG Series', 'Marshell DH Series', 'Marshell Utility EV Series'],
    soldUnits: 'XX'
  },
  {
    manufacturer: 'E-Z-GO',
    brands: ['E Z GO RXV', 'E Z GO TXT', 'E Z GO Express Series'],
    soldUnits: 'XX'
  },
  {
    manufacturer: 'Guangdong Lvtong New Energy EV',
    brands: ['Lvtong LT A Series', 'Lvtong LT B Series', 'Lvtong Sightseeing EV Series'],
    soldUnits: 'XX'
  },
  {
    manufacturer: 'Garia A/S',
    brands: ['Garia Golf', 'Garia Via'],
    soldUnits: 'XX'
  },
  {
    manufacturer: 'STAR EV',
    brands: ['STAR EV Capella Series', 'STAR EV Sirius Series'],
    soldUnits: 'XX'
  },
  {
    manufacturer: 'Alke',
    brands: ['Alke ATX Series'],
    soldUnits: 'XX'
  },
  {
    manufacturer: 'Others',
    brands: ['XX'],
    soldUnits: 'XX'
  }
]

interface CompetitiveIntelligenceProps {
  height?: number
}

export function CompetitiveIntelligence({ height }: CompetitiveIntelligenceProps) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Competitive Intelligence 2025</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-[#4A90A4] border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white min-w-[250px]">
                Manufacturer
              </th>
              <th className="bg-[#4A90A4] border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-white min-w-[300px]">
                Key Golf Cart Brands
              </th>
              <th className="bg-[#4A90A4] border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-white min-w-[120px]">
                Sold Units
              </th>
            </tr>
          </thead>
          <tbody>
            {manufacturerData.map((manufacturer, index) => {
              const rowCount = manufacturer.brands.length
              return manufacturer.brands.map((brand, brandIndex) => (
                <tr key={`${index}-${brandIndex}`} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {brandIndex === 0 && (
                    <td
                      rowSpan={rowCount}
                      className="bg-[#87CEEB] border border-gray-300 px-4 py-2 text-sm text-black font-medium align-top"
                    >
                      {manufacturer.manufacturer}
                    </td>
                  )}
                  <td className="border border-gray-300 px-4 py-2 text-sm text-black text-center">
                    {brand}
                  </td>
                  {brandIndex === 0 && (
                    <td
                      rowSpan={rowCount}
                      className="border border-gray-300 px-4 py-2 text-sm text-black text-center align-middle"
                    >
                      {manufacturer.soldUnits}
                    </td>
                  )}
                </tr>
              ))
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompetitiveIntelligence

import { Copy } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ButtonComponent } from '../ButtonComponent'

export default function DeliveryAPISettings() {
  const apiEndpoints = [
    {
      label: "Unique Key",
      value: "pk_live_06b1021b0404694ce406aa70cf2cb4c6ff8dbf91"
    },
    {
      label: "Make Delivery",
      value: "pk_live_06b1021b0404694ce406aa70cf2cb4c6ff8dbf91"
    },
    {
      label: "Delivery Status",
      value: "pk_live_06b1021b0404694ce406aa70cf2cb4c6ff8dbf91",
      method: "GET"
    },
    {
      label: "Delivery History Details",
      value: "pk_live_06b1021b0404694ce406aa70cf2cb4c6ff8dbf91",
      method: "GET"
    }
  ]

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('API key copied to clipboard!')
    } catch (err) {
      alert('Failed to copy API key')
    }
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold text-blue-600">Delivery API</h1>
          <p className="text-sm text-gray-500 mt-1">
            Add, remove and manage bank card
          </p>
        </div>
        <ButtonComponent 
        buttonStyles="bg-indigo-600 hover:bg-indigo-700"
        label={'Save Changes'}
        variant={'primary'}
        >
          
        </ButtonComponent>
      </div>

      <div className="space-y-4">
        {apiEndpoints.map((endpoint, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2">
              {endpoint.method && (
                <span className="text-green-500 font-medium">
                  {endpoint.method}
                </span>
              )}
              <span className="text-gray-700">{endpoint.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={endpoint.value}
                readOnly
                className="flex-1 px-4 py-2 bg-gray-50 border rounded-lg text-gray-600 text-sm focus:ring-0 focus:ring-blue-500"
              />
              <ButtonComponent
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(endpoint.value)}
                buttonStyles="hover:bg-gray-100"
                label={<span className="sr-only">Copy API key</span>}
                icon={<Copy className="h-4 w-4 text-gray-500" />}
              >              
              </ButtonComponent>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
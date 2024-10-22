import { Link1Icon } from '@radix-ui/react-icons'
import { Text } from '@radix-ui/themes'

export const Modulelist = () => {
  return (
        <div>
          <Text className="text-[#8B8B8B] mt-2">Module 1</Text>
          <div className="flex gap-3 mt-2">
            <div className="bordershadow flex gap-2 w-fit">
              <Link1Icon className="text-[#077BD8]"/>
              <input className="w-[180px]" type="text" placeholder="Module Name (Eg: Introduction)" name="" id="" />
            </div>
            <div className="bordershadow flex gap-2 w-fit">
              <Link1Icon className="text-[#077BD8]"/>
              <input className="w-fit" type="text" placeholder="Number of Lessons" name="" id="" />
            </div>
            <div className="bordershadow flex gap-2 w-fit">
              <Link1Icon className="text-[#077BD8]"/>
              <input className="w-[180px]" type="text" placeholder="Duration in Minutes (Auto Fetch)" name="" id="" />
            </div>
          </div>
          <div>
          <div className="bordershadow flex gap-2 mt-3">
              <Link1Icon className="text-[#077BD8]"/>
              <input className="" type="text" placeholder="Add a Module Description" name="" id="" />
            </div>
          </div>
        </div>
  )
}

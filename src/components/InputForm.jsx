/* eslint-disable react/prop-types */
import { Input } from "./ui/input"
import { Label } from "./ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./ui/select";
  import { Textarea } from "./ui/textarea";

const InputForm = ({ data, formData, setFormData}) => {
  
    if (data.type ==="input") {
  return (
    <div>
        <Label htmlFor={data.name}>{data.label}</Label>
        <Input
            id={data.name}
            name={data.name}
            placeholder={data.placeholder}
            type={data.type}
            value={formData[data.name] || ''}
            onChange={(event) =>
              setFormData({
                ...formData,
                [data.name]: event.target.value,
              })
            }
        />
    </div>
  )
}

    if (data.componentType ==="select") {
  return (
    <div>
        <Label htmlFor={data.name}>{data.label}</Label>
        <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [data.name]: value,
              })
            }
            value={formData[data.name] || ''}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={data.label} />
            </SelectTrigger>
            <SelectContent>
              {data.options && data.options.length > 0
                ? data.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
    </div>
  )
}

if (data.componentType ==="textarea") {
    return (
      <div>
        <Label htmlFor={data.name}>{data.label}</Label>
          <Textarea
              id={data.name}
              name={data.name}
              placeholder={data.placeholder}
              type={data.type}
              value={formData[data.name] || ''}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [data.name]: event.target.value,
                })
              }
          />
      </div>
    )
  }

    return (
      <div>
        <Label htmlFor={data.name}>{data.label}</Label>
          <Input
              id={data.name}
              name={data.name}
              placeholder={data.placeholder}
              type={data.type}
              value={formData[data.name] || ''}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [data.name]: event.target.value,
                })
              }
          />
      </div>
    )
}

export default InputForm
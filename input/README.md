# Komponen Input

## Import
```jsx
import Input from "../component/input";
```

## Type text
```jsx
<Input
    type="text"
    className=""
    label="Nama Lengkap"
    value={name}
    placeholder="Masukkan nama"
    onChange={(e) => setName(e.target.value)}
/>
```

## Type Tel
```jsx
<Input
    type="tel"
    className=""
    label="Nomor WhatsApp"
    value={phone}
    placeholder="8123456789"
    onChange={(e) => setPhone(e.target.value)}
    defaultCountry="ID"
/>
```

## Type Checkbox
```jsx
const hobbyOptions = [
    {
        label: "Membaca",
        value: "membaca"
    },
    {
        label: "Gaming",
        value: "gaming"
    },
    {
        label: "Programming",
        value: "programming"
    }
];
```
```jsx
<Input
    type="checkbox"
    className=""
    label="Pilih Hobi"
    value={hobbies}
    options={hobbyOptions}
    onChange={(e) => setHobbies(e.target.value)}
/>
```

## Type Warna
```jsx
<Input
    type="color"
    className=""
    label="Warna Primary"
    value={color}
    onChange={(e) => setColor(e.target.value)}
/>
```

## Type date
```jsx
<Input
    type="date"
    className=""
    label="Tanggal Lahir"
    value={birthDate}
    onChange={(e) => setBirthDate(e.target.value)}
/>
```

## Type Password
```jsx
<Input
    type="password"
    className=""
    label="Password"
    defaultValue="123456"
/>
```

## Type Radio
```jsx
const hobbyOptions = [
    {
        label: "Membaca",
        value: "membaca"
    },
    {
        label: "Gaming",
        value: "gaming"
    },
    {
        label: "Programming",
        value: "programming"
    }
];
```
```jsx
<Input
    type="radio"
    className=""
    label="Pilih Hobi"
    value={hobbies}
    options={hobbyOptions}
    onChange={(e) => setHobbies(e.target.value)}
/>
```

## Type Range
```jsx
<Input
    type="range"
    className=""
    label="Volume"
    value={volume}
    min={0}
    max={100}
    step={1}
    unit="%"
    onChange={(e) => setVolume(e.target.value)}
/>
```

## Type Select
```jsx
const options = [
  { value: "id", label: "Indonesia" },
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
];
```
```jsx
<Input
    type="select"
    isMultiple
    className=""
    label="Pilih Bahasa"
    placeholder="Bahasa"
    enableSearch={false}
    parentModalId="mainModal"
    options={options}
    value={lang}
    onChange={(e) => setLang(e.target.value)}
/>
```

## Type Step
```jsx
const steps = [
    {
        label: "Pilih Jenis",
        options: [
            { value: "surah", label: "Per Surah" },
            { value: "juz", label: "Per Juz" },
        ],
    },
    {
        label: "Pilih Detail",
        isMultiple: true,
        isSkippable: true,
        getDynamicOptions: (values) => {
            if (values[0] === "surah") {
                return [
                    { value: "1", label: "Al-Fatihah" },
                    { value: "2", label: "Al-Baqarah" },
                    { value: "114", label: "An-Nas" },
                ];
            }
            return Array.from({ length: 30 }, (_, i) => ({
                value: `${i + 1}`,
                label: `Juz ${i + 1}`,
            }));
        },
    },
];
```
```jsx
<Input
    type="step"
    steps={steps}
    className=""
    requiredSteps={[0, 1]}
    defaultValues={["surah", "1"]}
    onComplete={(values) => console.log(values)}
    renderTrigger={({ selectedLabels, values, steps }) => (
        <button className="btn btn-outline-primary">
        {selectedLabels.length ? selectedLabels.join(" - ") : "Pilih Bacaan"}
        </button>
    )}
/>
```

## Type List
```jsx
<Input
    type="list"
    label="Daftar Tugas"
    defaultItems={[
        { id: 1, label: "Desain sistem komponen" },
        { id: 2, label: "Implementasi API backend" },
    ]}
    onChange={(items) => console.log("Updated:", items)}
/>
```

## Type Image
```jsx
<Input
    type="image"
    initialUrls={[
        "https://picsum.photos/seed/a/400/400",
        "https://picsum.photos/seed/b/400/400",
    ]}
    getUploadedUrl={(res) => res.data.imageUrl}
    uploadUrl="/api/upload"
    multiple={true}
    maxFiles={10}
    onChange={(urls) => console.log(urls)}
    label="Foto Produk"
    className=""
/>
```

## Type Code
```jsx
<Input
    type="code"
    label="HTML Editor"
    language="html"
    value={html}
    onChange={setHtml}
/>
```
import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight ">Landing Page</h1>
            <Card />
            <Button title="Click Me" size="small" shape="rounded-full" />
        </div>
    )
}
export default Landing
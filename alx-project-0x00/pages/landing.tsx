import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () => {
    const shapeClass = {
        small: 'rounded-sm',
        medium: 'rounded-md',
        large: 'rounded-lg',
        full: 'rounded-full'
    }
    return (
        <div>
            <h1 className=" text-xl font-extralight ">Landing Page</h1>
            <Card />
            <Button title="Button 1" styles={shapeClass.small} />
            <Button title="Button 2" styles={shapeClass.medium} />
            <Button title="Button 3" styles={shapeClass.large} />
            <Button title="Button 3" styles={shapeClass.full} />
        </div>
    )
}
export default Landing
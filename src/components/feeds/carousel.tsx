import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function carousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className='basis-1/3'>home</CarouselItem>
        <CarouselItem className='basis-1/3'>home</CarouselItem>
        <CarouselItem className='basis-1/3'>home</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

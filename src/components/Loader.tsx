import { motion } from 'framer-motion'
import Image from 'next/image'
import loadingImages from '@/content/loadingImages.json'
import { LoadingImage } from '@/interfaces/candle.interface'

const container = {
  show: {
    transition: {
      staggerChildren: 0.6,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 600 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.5,
    },
  },
  exit: {
    opacity: 0,
    y: -600,
    transition: {
      duration: 1,
    },
  },
}

const renderImageBlocks = (image: LoadingImage) => (
  <ImageBlock key={image.id} variants={item} src={image.image} id={image.id} />
)

const Loader = ({ setLoading }: any) => {
  return (
    <motion.div
      variants={container}
      onAnimationComplete={() => setLoading(false)}
      initial="hidden"
      animate="show"
      exit="exit"
      className="relative h-screen w-screen flex justify-center items-center"
    >
      <motion.div variants={item} className="absolute z-[2]">
        <motion.img
          src={
            'https://images.unsplash.com/photo-1615041359332-02c8ffb7fe9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80'
          }
          width={550}
          layoutId="main-image-1"
        />
      </motion.div>
      {loadingImages.map(renderImageBlocks)}
      <motion.div
        variants={item}
        className="absolute z-10 text-[60px] font-bold text-white px-[10px] bg-blue"
      >
        Hella Co.
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock = ({ variants, src, id }: any) => {
  return (
    <motion.div variants={variants} className={`absolute ${id}`}>
      <Image
        src={src}
        alt={`${id}`}
        width="0"
        height="0"
        style={{ width: '220px', height: 'auto' }}
      />
    </motion.div>
  )
}
export default Loader

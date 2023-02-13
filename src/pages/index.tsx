import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { ReactElement, useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import Layout from '@/layouts/layout'
import { Button } from '@/components/Button'

function LandingScreen() {
  const [loading, setLoading] = useState(true)
  const [loadingImage, setImage] = useState(false)

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setImage(true)
      }, 2000)
    }
  })

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {loading ? (
          <div className="absolute">
            <div className="h-[200px] bg-background w-screen absolute z-[50]"></div>
            <motion.div
              key="loader"
              className="h-screen w-screen z-50 absolute overflow-hidden"
            >
              <Loader setLoading={setLoading} />
            </motion.div>
          </div>
        ) : (
          <>
            {!loading && (
              <div>
                <div className="w-screen h-screen overflow-hidden relative">
                  {loadingImage && (
                    <div className="absolute flex flex-wrap-reverse gap-5 justify-between top-[18%] w-screen font-medium px-[60px] text-[32px] text-darkBrown">
                      <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          ease: 'easeInOut',
                          duration: 1,
                          delay: 0.2,
                        }}
                        className="text-white max-w-[40%] tablet:max-w-none"
                      >
                        <div className="flex flex-col gap-5">
                          <p className="tablet:text-xl">
                            Transform Your Hair, Elevate Your Style with Hella
                            Co.
                          </p>
                          <Button
                            title="View Product"
                            onClick={() => {}}
                          ></Button>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          ease: 'easeInOut',
                          duration: 1.5,
                          delay: 1.5,
                        }}
                        className="uppercase tracking-[1.2rem] font-bold text-[60px] mobile:text-4xl"
                      >
                        Hella Co.
                      </motion.div>
                    </div>
                  )}

                  <motion.img
                    className="w-screen h-screen object-cover"
                    transition={{
                      duration: 1.6,
                    }}
                    src={
                      'https://images.unsplash.com/photo-1615041359332-02c8ffb7fe9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80'
                    }
                    layoutId="main-image-1"
                  />
                </div>
                {/* <div>l,,flsdf</div> */}
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

LandingScreen.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default LandingScreen

import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function SearchResult() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mb-10">
      <Link to="/main/3">
        <section>
          <h1 className="my-3 text-3xl font-semibold text-gray-800 capitalize">
            Block of Ui kit collections
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
            velit mollis, sollicitudin dui nec, efficitur sapien. Mauris porta
            aliquam odio, sit amet viverra ligula blandit sed. Quisque cursus
            pulvinar urna, eu malesuada est dictum sed. Vestibulum ultrices
            efficitur quam. Nam ut volutpat justo. Quisque dolor est, volutpat
            eget odio id, rutrum varius orci. Maecenas euismod vestibulum velit
            a condimentum. Aliquam bibendum commodo enim at tristique. Etiam
            rutrum dapibus tristique. Nulla semper placerat lacinia. Cras magna
            purus, fermentum sed iaculis eget, viverra eu diam. Fusce porttitor
            dictum accumsan. Phasellus sit amet venenatis diam. Nam quis risus
            felis. Vivamus vulputate, arcu ac congue imperdiet, mauris nisl
            finibus libero, ut mollis felis ligula vel mauris. Aliquam maximus
            est vitae dignissim blandit. Sed volutpat, purus vitae consequat
            tincidunt, urna elit pellentesque nisi, ac feugiat tortor lectus sit
            amet diam. Curabitur fermentum elementum volutpat. Pellentesque
            bibendum viverra augue, vel interdum magna facilisis quis. Etiam
            eleifend bibendum gravida. Donec finibus tortor quis urna porta
            sodales. Curabitur eu urna libero. Cras vitae elementum neque.
          </p>
        </section>
      </Link>
    </div>
  )
}

import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function MyWiki() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mb-10">
      <Link to="/main/3">
        <section>
          <div className="flex flex-row">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize">
              Block of Ui kit collections
            </h1>
            <div className="flex items-center justify-center ml-3">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Edit
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Delete
              </span>
            </div>
          </div>
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

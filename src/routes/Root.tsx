import { Outlet } from 'react-router-dom'
import AmuFooter from '../components/AmuFooter'
import AmuNavBar from '../components/AmuNavBar'

export async function postAction() {
  return
}

export default function Root() {
  return (
    <>
      <AmuNavBar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

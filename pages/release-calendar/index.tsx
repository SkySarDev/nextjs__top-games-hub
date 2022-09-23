import { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

import { customFetchQuery } from '@utils/fetch.utils'
import { PagesServices } from '@services/pages.services'
import { ContentError } from '@components/content'
import { GamesContent } from '@components/pages/games'

const ReleaseCalendar: NextPage = () => {
  const { data } = useQuery(
    ['release-calendar-page'],
    PagesServices.getReleaseCalendar
  )

  // prettier-ignore
  return (
    <>
      {data ? (
        <GamesContent data={data} />
      ) : (
        <ContentError />
      )}
    </>
  )
}

export default ReleaseCalendar

export const getServerSideProps = async () => {
  return customFetchQuery(
    ['release-calendar-page'],
    PagesServices.getReleaseCalendar
  )
}

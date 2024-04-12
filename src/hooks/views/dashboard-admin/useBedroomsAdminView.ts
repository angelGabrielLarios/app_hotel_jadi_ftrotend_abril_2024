import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { BedroomStatusResponse, getBedroomsStatusAPI, getStatisticsBedrooms, StatisticsBedroomsResponse, StatusResponse, updateStatusBedroom } from "../../../API";
import toast from 'react-hot-toast';

export const useBedroomsAdminView = () => {



    const [bedrooms, setBedrooms] = useState<BedroomStatusResponse[] | []>([])
    const [filteredBedrooms, setfilteredBedrooms] = useState<BedroomStatusResponse[] | []>([])


    const [byStatus, setByStatus] = useState<string>('')
    const [byType, setByType] = useState<string>('')

    const [searchByNumberBedroom, setSearchByNumberBedroom] = useState<number>(0)

    const [numberBedroomForModal, setNumberBedroomForModal] = useState<number>(0)

    const [statusBedroomForModal, setStatusBedroomForModal] = useState<StatusResponse>()

    const [statisticsBedrooms, setStatisticsBedrooms] = useState<StatisticsBedroomsResponse>({
        number_available_bedrooms: 0,
        number_occupied_bedrooms: 0,
        number_total_bedrooms: 0
    })

    const modalEditStatusRef = useRef<HTMLDialogElement>(null)


    const getDataBedrooms = async () => {
        const newStatisticsBedroomAPI = await getStatisticsBedrooms()
        setStatisticsBedrooms(newStatisticsBedroomAPI)
        const newBedroomsAPI = await getBedroomsStatusAPI()
        setBedrooms(newBedroomsAPI)
        setfilteredBedrooms(newBedroomsAPI)
    }

    function handleChangeFilterBedrooms(event: ChangeEvent<HTMLSelectElement>) {

        const value = event.target.value

        if (!value) {
            setfilteredBedrooms(
                bedrooms
            )
            return
        }

        setfilteredBedrooms(
            bedrooms.filter(bedroom => bedroom.status === value as StatusResponse)
        )

    }

    const onSubmitUpdateStatusBedroom = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const response = await updateStatusBedroom({ num_bedroom: numberBedroomForModal, status: statusBedroomForModal || StatusResponse.Available })
        response
        getDataBedrooms()
        modalEditStatusRef.current?.close()
        toast.success('Successfully created!');

    }


    const handleSubmitSearchBedroomByNumber = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const numberBedroomString = formData.get('number_bedroom') as string
        const numberBedroom = parseInt(numberBedroomString || '0')
        setSearchByNumberBedroom(
            numberBedroom
        )
    }

    const filterTheBedrooms = () => {

        console.log(bedrooms)
        const filterBedroomsByStatus = bedrooms.filter((bedroom) => {
            if (byStatus === "") {
                return true
            }
            return bedroom.status === byStatus as StatusResponse
        })

        const filterBedroomsByType = [...filterBedroomsByStatus].filter((bedroom) => {
            if (byType === '') {
                return true
            }
            const typeBedroom = bedroom.bedroomType.type as string
            return typeBedroom === byType
        })

        const filterBedroomByNumber = [...filterBedroomsByType].filter((bedroom) => {
            if (!searchByNumberBedroom) {
                return true
            }
            return bedroom.num_bedroom === searchByNumberBedroom
        })

        const newFilteredBedrooms = [...filterBedroomByNumber]

        setfilteredBedrooms(newFilteredBedrooms)
    }





    useEffect(() => {
        filterTheBedrooms();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [byStatus, byType, searchByNumberBedroom]);




    useEffect(() => {
        getDataBedrooms()
    }, [])


    return {
        bedrooms,
        statisticsBedrooms,
        filteredBedrooms,
        handleChangeFilterBedrooms,
        setByStatus,
        setByType,
        handleSubmitSearchBedroomByNumber,
        setNumberBedroomForModal,
        numberBedroomForModal,
        modalEditStatusRef,
        statusBedroomForModal,
        setStatusBedroomForModal,
        onSubmitUpdateStatusBedroom
    }
}

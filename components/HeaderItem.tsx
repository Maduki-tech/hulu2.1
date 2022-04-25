import { NextPage } from "next"

type Props = {
	title: String,
	Icon: any
}

const HeaderItem: NextPage<Props> = ({title, Icon}) => {
	return (
		<div className="group flex flex-col items-center w-12 sm:w-20 hover:text-white ">
			<Icon className='h-8 mb-1 group-hover:animate-bounce'/>
			<p className="tracking-widest group-hover:opacity-100 opacity-0">{title}</p>
			
		</div>
	)
}

export default HeaderItem;

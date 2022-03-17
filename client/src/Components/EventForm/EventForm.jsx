export default function EventForm(props) {
  const {onSubmit, handleChange, event, title} = props

  return (
    <div>
      <section className="flex flex-col items-center m-8 space-y-3">
        <form
          onSubmit={onSubmit}
          className="text-lg text-center p-2 font-noto-display bg-emerald-500 flex flex-col items-center text-emerald-1000
        rounded-2xl"
        >
          <div className="text-emerald-1000">
            <label className="block">Name of Event</label>
            <input type="string" id="name" value={event.name} onChange={handleChange} required autoFocus className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
            <label className="block">Description</label>
            <textarea type="string" id="description" value={event.description} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
            <label className="block">Equipment Needed</label>
            <textarea type="string" id="equipment" value={event.equipment} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
            <label className="block">Donations Needed</label>
            <input type="number" id="donations" value={event.donations} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
            <label className="block">Participants Needed</label>
            <input type="number" id="participants_needed" value={event.participants_needed} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
            <label className="block">Location</label>
            <input type="string" id="location" value={event.location} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
            <label className="block">Image for Post</label>
            <input type="string" id="img_url" value={event.img_url} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
            <label className="block">Start Date</label>
            <input type="date" id="start_date" value={event.start_date} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
            <label className="block">End Date</label>
            <input type="date" id="end_date" value={event.end_date} onChange={handleChange} required className="text-lg bg-emerald-100 rounded-2xl pl-4 py-3" />
          </div>
          <button
            className="bg-emerald-700 text-emerald-100 hover:text-emerald-50 hover:bg-emerald-600
          hover:-translate-y-0.5 transform transition
          focus:outline-none focus:ring focus:ring-offset-2 focus:ring-emerald-300 focus:ring-opacity-50
          active:text-emerald-200 active:bg-emerald-800 rounded-2xl py-2 px-6 my-6"
          >
            {title}
          </button>
        </form>
      </section>
    </div>
  )
}

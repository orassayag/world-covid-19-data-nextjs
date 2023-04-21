export default function HoursSelect({
  dataModelName, updatesHoursCount, onActionChange,
}) {
  const hours = [1, 2, 3, 5].map((hour) => (
    <option key={hour} value={hour}>
      {hour}
      ago
    </option>
  ));

  return (
    <select data-action="select-time" data-modal-name={dataModelName || null} value={updatesHoursCount} onChange={onActionChange}>
      {hours}
    </select>
  );
}
